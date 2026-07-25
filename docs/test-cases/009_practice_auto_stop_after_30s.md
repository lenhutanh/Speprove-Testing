# Test Case: TC-PRACTICE-003 - Verify recording automatically stops after reaching the 30-second speaking limit

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-PRACTICE-003 |
| **Feature** | Practice |
| **Description** | Verify that the speaking practice recording automatically stops when it reaches the 30-second maximum speaking time limit for Part 1 questions. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [practice.spec.ts](../../automation/e2e/practice.spec.ts) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-25 | **PASS** | Automated test script executed successfully. Recording automatically stopped at 30 seconds and displayed recorded controls. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | User is successfully authenticated with a valid session state. |
| 2 | User is currently at a dynamic question practice workspace (`/forecast/[forecastSlug]/practice/[questionId]`) for a Part 1 question. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `partOneMaxTime` | `30` seconds |

## 4. Test Scenario & Steps
**Scenario:** Verify automatic recording stop at maximum limit.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Click the Record button (microphone icon) | Recording starts and the countdown timer begins at 30 seconds. | As expected | **PASS** |
| 2 | Let the recording run without clicking any buttons for 30.5 seconds | The countdown timer reaches 0. The recording automatically stops without any manual click. | As expected | **PASS** |
| 3 | Verify UI state transition | The UI transitions automatically to the recorded state, displaying the AudioPlayer, a Delete button (trash icon), and a Send button (paperplane icon). | As expected | **PASS** |

## 5. Testing Techniques Applied
*   State Transition Testing (Auto-stop transition at limit).
