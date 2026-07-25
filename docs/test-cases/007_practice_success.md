# Test Case: TC-PRACTICE-001 - Practice speaking successfully and verify grading results

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-PRACTICE-001 |
| **Feature** | Practice |
| **Description** | Verify that a logged-in user can navigate to a forecast question, record their response for at least 10 seconds, submit it, and successfully receive the AI evaluation results. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [practice.spec.ts](../../automation/e2e/practice.spec.ts) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-25 | **PASS** | Automated test script executed successfully. AI evaluated the dynamic speech WAV input and returned a valid Band score. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | User is successfully authenticated with a valid session state. |
| 2 | Browser is configured with `--use-fake-ui-for-media-stream` and `--use-fake-device-for-media-stream`. |
| 3 | At least one Forecast and one associated Topic with practice questions exist in the database. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `audioDuration` | Dynamic value derived from `sample.wav` (must be $\ge 10000$ ms to bypass the minimum speaking time lock) |

## 4. Test Scenario & Steps
**Scenario:** Complete a practice session by recording an answer and waiting for the AI evaluation score.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/forecast` | Forecast landing page loads and lists available forecast sets. | As expected | **PASS** |
| 2 | Click on the first Forecast card | Detail page of the selected forecast loads, showing "Part 1" and "Part 2 & 3" tabs. | As expected | **PASS** |
| 3 | Under Part 1 tab, click on the first Topic card | Topic detail page loads, showing a list of Part 1 practice questions. | As expected | **PASS** |
| 4 | Click on the first Question card | Practice workspace for the selected question (`/forecast/[forecastSlug]/practice/[questionId]`) loads successfully with the question text and bottom control bar. | As expected | **PASS** |
| 5 | Click the "Ghi âm" (Record) button in the bottom bar | Recording starts; the countdown timer begins, and the stop button is initially disabled. | As expected | **PASS** |
| 6 | Wait for the duration of the audio sample (at least 10 seconds), then click the "Dừng" (Stop) button | Recording stops; the bottom bar switches to the recorded phase showing an audio player, a Delete button, and a Send button. | As expected | **PASS** |
| 7 | Click the "Gửi" (Send) button | The audio is uploaded, the attempt is created, the control bar resets to idle, and the left panel automatically switches to the "Lịch sử" (History) tab showing the new attempt as processing. | As expected | **PASS** |
| 8 | Wait for the evaluation to complete | The processing indicator disappears; overall band score and detailed feedback criteria (Fluency, Vocabulary, Pronunciation, Grammar) are displayed in the attempt history item. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   State Transition Testing
*   Equivalence Partitioning (EP)
