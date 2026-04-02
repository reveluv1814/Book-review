import { test, expect } from "@playwright/test";

const user = {
  email: "pedro@email.com",
  password: "123456",
};

const userCustom = {
  email: "roberto@email.com",
  password: "123456",
  name: "Roberto Gómez",
};

test.describe("Fujo de Autenticación", () => {
  test("Debería iniciar sesión correctamente", async ({ page }) => {
    await page.goto("/login");

    await expect(
      page.getByRole("heading", { name: "Iniciar sesión" }),
    ).toBeVisible();

    await page.locator("#email").fill(user.email);
    await page.locator("#password").fill(user.password);

    await page.locator("#login-button").click();

    await expect(page).toHaveURL("/reviews");
  });
});

test.describe("Fujo de Registro de Usuarios", () => {
  test("Debería registrar un nuevo usuario correctamente", async ({ page }) => {
    await page.goto("/login");

    await page.getByRole("link", { name: "Regístrate" }).click();

    await expect(
      page.getByRole("heading", { name: "Registrarse" }),
    ).toBeVisible();

    await page.locator("#name").fill(userCustom.name);
    await page.locator("#email").fill(userCustom.email);
    await page.locator("#password").fill(userCustom.password);

    await page.locator("#signup-button").click();

    await expect(
      page.getByText("Registro exitoso! Ahora puedes iniciar sesión"),
    ).toBeVisible();
  });

  test("Debería iniciar sesión con el nuevo usuario registrado", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator("#email").fill(userCustom.email);
    await page.locator("#password").fill(userCustom.password);

    await page.locator("#login-button").click();

    await expect(page).toHaveURL("/reviews");
  });
});
