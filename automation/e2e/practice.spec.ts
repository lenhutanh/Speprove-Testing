import { test, expect } from "../fixtures/fixtures";
import path from "path";
import { getWavDuration } from "../utils/audio";

test.describe("Speaking Practice Feature Tests", () => {
  test.describe.configure({ mode: "serial" });

  let practiceUrl: string;

  test("TC-PRACTICE-001: Practice speaking successfully and verify grading results @smoke", async ({
    forecastPage,
    forecastDetailPage,
    topicDetailPage,
    practicePage,
    page,
  }) => {
    test.setTimeout(80000);

    const audioPath = path.join(__dirname, "..", "assets", "sample.wav");
    const recordDuration = getWavDuration(audioPath);

    expect(recordDuration).toBeGreaterThanOrEqual(10000);

    await forecastPage.navigate();

    await forecastPage.selectFirstForecast();

    await forecastDetailPage.selectFirstTopic();

    await topicDetailPage.selectFirstQuestion();

    await expect(page).toHaveURL(/.*\/forecast\/.*\/practice\/.*/);

    practiceUrl = page.url();

    await practicePage.startRecording();

    await expect(page.locator('div.h-26 span.tabular-nums')).toBeVisible();

    await page.waitForTimeout(recordDuration);

    await practicePage.stopRecording();

    await practicePage.submitAttempt();

    await expect(practicePage.latestAttempt).toContainText("Band ", {
      timeout: 60000,
    });
  });

  test("TC-PRACTICE-002: Verify Stop button lock state transitions from disabled to enabled at the 10-second boundary", async ({
    practicePage,
    page,
  }) => {
    expect(practiceUrl).toBeDefined();
    await page.goto(practiceUrl);

    await practicePage.startRecording();

    await page.waitForTimeout(5000);
    const stopButton = page.locator("button:has(svg.lucide-square)");
    await expect(stopButton).toBeDisabled();

    await page.waitForTimeout(5500);

    await expect(stopButton).toBeEnabled();
  });

  test("TC-PRACTICE-003: Verify recording automatically stops after reaching the 30-second speaking limit", async ({
    practicePage,
    page,
  }) => {
    test.setTimeout(45000);
 
    expect(practiceUrl).toBeDefined();
    await page.goto(practiceUrl);
 
    await practicePage.startRecording();
 
    await page.waitForTimeout(30500);
 
    const sendButton = page.locator("button:has(svg.lucide-send)");
    await expect(sendButton).toBeVisible();
  });

  test("TC-PRACTICE-004: Verify user can discard/delete the recorded audio", async ({
    practicePage,
    page,
  }) => {
    expect(practiceUrl).toBeDefined();
    await page.goto(practiceUrl);

    await practicePage.startRecording();

    await page.waitForTimeout(12000);

    await practicePage.stopRecording();

    const deleteButton = page.locator("button:has(svg.lucide-trash-2)");
    const sendButton = page.locator("button:has(svg.lucide-send)");
    await expect(deleteButton).toBeVisible();
    await expect(sendButton).toBeVisible();

    await deleteButton.click();

    const recordButton = page.locator("button:has(svg.lucide-mic)");
    await expect(recordButton).toBeVisible();
    await expect(deleteButton).not.toBeVisible();
  });
});
