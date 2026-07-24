# Test Case: TC-AUTH-007 - Login failed with empty email field

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-AUTH-007 |
| **Feature** | Login |
| **Description** | Verify that login fails with validation messages when the email field is left empty. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [login.spec.ts](../../automation/e2e/login.spec.ts#L22) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-24 | **PASS** | Form validation error "Trường này là bắt buộc" was displayed. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | Browser is opened, and no active user session exists. |

### Test Data
| Parameter | Value |
| :--- | :--- |
| `email` | `""` (empty string) |
| `password` | `Password123!` |

## 4. Test Scenario & Steps
**Scenario:** Verify frontend validation blocker on missing email.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Navigate to `/login` | Login page loads successfully. | As expected | **PASS** |
| 2 | Leave the Email field empty and fill the Password field | Fields accept the state. | As expected | **PASS** |
| 3 | Click the "Login" button | Form submission is blocked, and an inline error "Trường này là bắt buộc" is displayed below the email field. | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Boundary Value Analysis (BVA)
*   Error Guessing (EG)
