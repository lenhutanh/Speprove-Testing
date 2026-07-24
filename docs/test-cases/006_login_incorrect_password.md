# Test Case: TC-AUTH-006 - Login failed with incorrect password

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-006 |
| **Feature** | Login |
| **Description** | Verify that login fails and displays an error toast when using an incorrect password. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [login.spec.ts](../../automation/e2e/login.spec.ts#L13) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-24 | **PASS** | Error toast "Invalid email or password" was displayed. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | User account `user01@example.com` exists in the system. |
| 2 | Browser is opened, and no active user session exists. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `email` | `user01@example.com` |
| `password` | `WrongPassword123!` |

## 4. Test Scenario & Steps
**Scenario:** Verify error feedback on incorrect password attempt.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/login` | Login page loads successfully. | As expected | **PASS** |
| 2 | Fill in valid email and an incorrect password | Fields accept the user inputs. | As expected | **PASS** |
| 3 | Click the "Login" button | Login fails, user remains on `/login`, and an error toast "Invalid email or password" is displayed. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Equivalence Partitioning (EP)
*   Error Guessing (EG)
