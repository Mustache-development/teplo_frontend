async updateTokenMonobank(req, newTokenMonobank: string) {
    const token = this.tokenService.getBearerToken(req);

    if (!newTokenMonobank || !token) {
      return {
        status: 400,
        message: "Not enough arguments",
      };
    }

    try {
      const tokenData = await this.tokenService.validateJwtToken(token);
      if (!tokenData.authorization) {
        return {
          code: 401,
          message: "authorization fail",
        };
      }

      const { data } = await lastValueFrom(
        this.httpService
          .get<any>("https://api.monobank.ua/personal/statement/", {
            headers: { "X-Token": token },
          })
          .pipe(
            catchError((error) => {
              throw error;
            })
          )
      );

      let jars = [];
      if (data.jars) {
        jars = data.jars.map(function (jar: { id: string; title: string }) {
          return {
            id: jar.id,
            title: jar.title,
          };
        });
      }

      const checkMonobank = await this.tokenMonobankModel.find();

      if (checkMonobank.length > 0) {
        await this.tokenMonobankModel.findOneAndUpdate(
          { _id: checkMonobank[0]._id },
          { token: newTokenMonobank, jars: jars }
        );
      } else {
        await this.tokenMonobankModel.create({
          token: newTokenMonobank,
          jars: jars,
        });
      }

      return {
        code: 200,
        message: "Token monobank update. Check jar, please.",
        jars,
      };
    } catch (err) {
      return {
        code: 500,
        message: "error server",
      };
    }
  }

  