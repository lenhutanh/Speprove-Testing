# Test Case: TC-PRACTICE-004 - Verify user can discard/delete the recorded audio

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-PRACTICE-004 |
| **Feature** | Practice |
| **Description** | Verify that the user can successfully discard/delete a recorded answer and return to the idle/initial state. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [practice.spec.ts](../../automation/e2e/practice.spec.ts) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-25 | **PASS** | Automated test script executed successfully. Recorded audio was successfully deleted, resetting the UI to idle state. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | User is successfully authenticated with a valid session state. |
| 2 | User is currently at a dynamic question practice workspace (`/forecast/[forecastSlug]/practice/[questionId]`). |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `recordingDuration` | `12000` ms (from dynamic or static WAV) |

## 4. Test Scenario & Steps
**Scenario:** Record audio and discard it before submission.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Click the Record button (microphone icon) | Recording starts. | As expected | **PASS** |
| 2 | Record for 12 seconds, then click the Stop button (square icon) | Recording stops and UI transitions to the recorded state, showing the AudioPlayer and Send (paperplane) / Delete (trash) buttons. | As expected | **PASS** |
| 3 | Click the Delete button (trash icon) | The recorded audio is deleted. The UI transitions back to the idle state. The Record button is visible again, and no new attempt is created in the History panel. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   State Transition Testing.
