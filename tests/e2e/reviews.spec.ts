import { test, expect } from "@playwright/test";

const userCustom = {
  email: "roberto@email.com",
  password: "123456",
  name: "Roberto Gómez",
};

const customReview = {
  book_title: "El Gran Gatsby",
  rating: 4,
  review: "Esta es una reseña de prueba para el libro 'El Gran Gatsby'.",
  mood: "Cuento",
};

test.describe("Fujo de Reviews", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");

    await expect(
      page.getByRole("heading", { name: "Iniciar sesión" }),
    ).toBeVisible();

    await page.locator("#email").fill(userCustom.email);
    await page.locator("#password").fill(userCustom.password);

    await page.locator("#login-button").click();
  });

  test("Debería Listar las reviews", async ({ page }) => {
    await expect(page).toHaveURL("/reviews");

    await expect(
      page.getByRole("heading", { name: "¡Bienvenido" }),
    ).toBeVisible();

    await expect(page.locator("#reviews-list")).toBeVisible();
  });

  test("Debería registrar una nueva review", async ({ page }) => {
    await expect(page).toHaveURL("/reviews");

    await page.locator("#add-review").click();

    await expect(page).toHaveURL("/add-review");

    await expect(
      page.getByRole("heading", { name: "Agregar review" }),
    ).toBeVisible();

    await page.locator("#book_title").fill(customReview.book_title);
    await page.locator(`#rating-${customReview.rating}`).click();
    await page.locator("#review").fill(customReview.review);
    await page.locator("#mood").fill(customReview.mood);

    await page.locator("#add-review-button").click();

    await expect(
      page.getByText("Review registrada correctamente!"),
    ).toBeVisible();
  });

  test("Debería eliminar un review", async ({ page }) => {
    await expect(page).toHaveURL("/reviews");

    await page.locator('[id^="delete-review-"]').first().click();

    await page.locator("#confirm-button").click();

    await expect(
      page.getByText("Review eliminada correctamente!"),
    ).toBeVisible();
  });
});
