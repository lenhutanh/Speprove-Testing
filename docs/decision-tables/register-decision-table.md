# Register Feature Decision Table

This table maps the logical combinations of inputs for the registration and OTP verification flows to determine the system's output actions.

| Category | Item / Condition / Action | Rule R1 | Rule R2 | Rule R3 |
| :--- | :--- | :---: | :---: | :---: |
| **Conditions** | **C1:** Email is unique (does not exist in DB)? | Y | N | Y |
| | **C2:** OTP is correct (OTP === '123456')? | Y | - | N |
| **Actions** | **A1:** Complete registration and redirect to `/login` | **X** | | |
| | **A2:** Display error toast "Account already exists" | | **X** | |
| | **A3:** Display error toast "OTP is invalid or has expired" | | | **X** |
| **Mapping** | **Associated Test Case ID** | **[TC-AUTH-001](../test-cases/001_register_success.md)** | **[TC-AUTH-002](../test-cases/002_register_duplicate_email.md)** | **[TC-AUTH-003](../test-cases/003_register_invalid_otp.md)** |
