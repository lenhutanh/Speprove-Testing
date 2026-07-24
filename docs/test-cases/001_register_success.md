# Test Case: TC-AUTH-001 - Register successfully with dynamic credentials and verify OTP

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-001 |
| **Feature** | Register |
| **Description** | Verify that a new user can register successfully by submitting the sign-up form and entering the default test OTP. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [register.spec.ts](../../automation/e2e/register.spec.ts) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-23 | **PASS** | Registration was successful, and user was successfully created and activated. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | Browser is opened, and no active user session exists. |
| 2 | Backend default test OTP bypass (`123456`) is active for development environment. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `email` | `testuser_[timestamp]@example.com` (dynamic email to avoid collisions) |
| `password` | `Password123!` |
| `confirmPassword` | `Password123!` |
| `otp` | `123456` (Default test OTP bypass) |

## 4. Test Scenario & Steps
**Scenario:** Verify new user registration and activation flow.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/register` | Register page loads successfully with Email, Password, and Confirm Password fields. | As expected | **PASS** |
| 2 | Fill in valid dynamic email, password, and confirm password | Fields accept the user inputs correctly. | As expected | **PASS** |
| 3 | Click the "Sign up" button | Form is submitted, and user is redirected to the `/verify-otp` verification page. | As expected | **PASS** |
| 4 | Enter default test OTP `123456` and click verify | OTP is verified, user account status in database changes to active, and user is redirected to `/login` page with a success toast. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Equivalence Partitioning (EP)
*   State Transition (ST)
