# Test Case: TC-AUTH-006 - Login failed with unregistered email

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-006 |
| **Feature** | Login |
| **Description** | Verify that login fails and displays an error toast when using an unregistered email. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [login.spec.ts](../../automation/e2e/login.spec.ts#L22) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-24 | **PASS** | Error toast "Invalid email or password" was displayed. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | The email address `unregistered_user@example.com` is not associated with any registered account. |
| 2 | Browser is opened, and no active user session exists. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `email` | `unregistered_user@example.com` |
| `password` | `Password123!` |

## 4. Test Scenario & Steps
**Scenario:** Verify error feedback on unregistered email login attempt.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/login` | Login page loads successfully. | As expected | **PASS** |
| 2 | Fill in an unregistered email and any password | Fields accept the user inputs. | As expected | **PASS** |
| 3 | Click the "Login" button | Login fails, user remains on `/login`, and an error toast "Invalid email or password" is displayed. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   [Decision Table Testing](../decision-tables/login-decision-table.md) (Rule R2)
*   Equivalence Partitioning (EP)
