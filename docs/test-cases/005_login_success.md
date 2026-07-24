# Test Case: TC-AUTH-005 - Login successfully with valid credentials

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-005 |
| **Feature** | Login |
| **Description** | Verify that a registered user can log in successfully with correct credentials. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [login.spec.ts](../../automation/e2e/login.spec.ts#L4) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-24 | **PASS** | Successfully authenticated and redirected to homepage. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | User account `user01@example.com` exists in the system with password `user123654`. |
| 2 | Browser is opened, and no active user session exists. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `email` | `user01@example.com` |
| `password` | `user123654` |

## 4. Test Scenario & Steps
**Scenario:** Verify successful user login and redirection.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/login` | Login page loads successfully with email and password fields. | As expected | **PASS** |
| 2 | Fill in valid email and password | Fields accept the user inputs correctly. | As expected | **PASS** |
| 3 | Click the "Login" button | User is authenticated and redirected to the home page (`/`, `/vi` or `/en`). | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Equivalence Partitioning (EP)
*   State Transition (ST)
