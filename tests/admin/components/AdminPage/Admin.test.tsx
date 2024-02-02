import '@testing-library/jest-dom';
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Admin from "../../../../src/admin/components/AdminPage/AdminPage";
import { render, screen } from "@testing-library/react";

test("renders Admin page", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
  );

  // Перевірка, чи відображається заголовок "Адміністративна панель"
  expect(getByText("Адміністративна панель")).toBeInTheDocument();

  // Перевірка наявності посилання для входу
  expect(getByText("Login")).toBeInTheDocument();
});
