# Test Case: TC-AUTH-003 - Register failed with password mismatch

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-003 |
| **Feature** | Register |
| **Description** | Verify that registration fails with validation messages when password and confirm password fields do not match. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [register.spec.ts](../../automation/e2e/register.spec.ts#L31) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-24 | **PASS** | Form validation error "Mật khẩu xác nhận không khớp" was displayed. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | Browser is opened, and no active user session exists. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `email` | `testuser_[timestamp]@example.com` |
| `password` | `Password123!` |
| `confirmPassword` | `DifferentPassword123!` |

## 4. Test Scenario & Steps
**Scenario:** Verify password mismatch validation blocker.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/register` | Register page loads successfully. | As expected | **PASS** |
| 2 | Fill in valid email and password, but a mismatching confirm password | Fields accept the user inputs. | As expected | **PASS** |
| 3 | Click the "Sign up" button | Form submission is blocked, and an inline error "Mật khẩu xác nhận không khớp" is displayed below the confirm password field. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Equivalence Partitioning (EP)
*   Error Guessing (EG)
