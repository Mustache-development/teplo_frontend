import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PaidIcon from '@mui/icons-material/Paid';
import PostListComponent from "../posts/PostListComponent";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Тепло на передову
            </Typography>
            <PaidIcon />
          </Toolbar>
        </AppBar>
      </Box>
      <h1>
        Тепло на передову
      </h1>  
      <h2>
        <Link to="/admin/">Admin</Link>
        <a href="instagram://library?AssetPath=https://images.app.goo.gl/2nLGmXra4gRKVhTk6&InstagramCaption=%D1%86%D0%B5%20%D0%BA%D0%BE%D1%82%D0%B8%D0%BA" target="_blank">Відкрити Instagram</a>

      </h2>

      <StaticImage
        alt="Gatsby G Logo"
        src="../images/photo1.jpg"
      />
      <PostListComponent />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
