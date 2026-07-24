# Test Case: TC-AUTH-004 - Register failed with invalid OTP

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-004 |
| **Feature** | Register |
| **Description** | Verify that registration verification fails and displays an error toast when entering an invalid or incorrect OTP. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [register.spec.ts](../../automation/e2e/register.spec.ts#L41) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-24 | **PASS** | Error toast "OTP is invalid or has expired" was displayed. |

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
| `confirmPassword` | `Password123!` |
| `otp` | `000000` (invalid OTP) |

## 4. Test Scenario & Steps
**Scenario:** Verify invalid OTP verification block.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/register` | Register page loads successfully. | As expected | **PASS** |
| 2 | Fill in valid register credentials and submit | Redirected to `/verify-otp` verification page. | As expected | **PASS** |
| 3 | Enter an invalid OTP `000000` and submit | OTP verification fails, user stays on `/verify-otp`, and an error toast "OTP is invalid or has expired" is displayed. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Equivalence Partitioning (EP)
*   Error Guessing (EG)
