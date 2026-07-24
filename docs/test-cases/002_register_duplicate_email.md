# Test Case: TC-AUTH-002 - Register failed with email already registered

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-002 |
| **Feature** | Register |
| **Description** | Verify that registration fails with an error toast when trying to register with an email that already exists in the system. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [register.spec.ts](../../automation/e2e/register.spec.ts#L20) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-24 | **PASS** | Error toast "Account already exists" was displayed. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | User account `user01@example.com` already exists in the system. |
| 2 | Browser is opened, and no active user session exists. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `email` | `user01@example.com` |
| `password` | `Password123!` |
| `confirmPassword` | `Password123!` |

## 4. Test Scenario & Steps
**Scenario:** Verify duplicate email registration block.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/register` | Register page loads successfully. | As expected | **PASS** |
| 2 | Fill in an already registered email and passwords | Fields accept the user inputs. | As expected | **PASS** |
| 3 | Click the "Sign up" button | Form is submitted, registration fails, and an error toast "Account already exists" is displayed. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Equivalence Partitioning (EP)
*   Error Guessing (EG)
