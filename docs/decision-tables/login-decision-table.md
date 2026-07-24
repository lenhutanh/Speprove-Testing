# Login Feature Decision Table

This table maps the logical combinations of inputs for the authentication flow to determine the system's output actions.

| Category | Item / Condition / Action | Rule R1 | Rule R2 | Rule R3 |
| :--- | :--- | :---: | :---: | :---: |
| **Conditions** | **C1:** Email exists in database? | Y | N | Y |
| | **C2:** Password is correct? | Y | - | N |
| **Actions** | **A1:** Authenticate user and redirect to homepage | **X** | | |
| | **A2:** Display error toast "Invalid email or password" | | **X** | **X** |
| **Mapping** | **Associated Test Case ID** | **[TC-AUTH-005](../test-cases/005_login_success.md)** | **[TC-AUTH-007](../test-cases/007_login_unregistered_email.md)** | **[TC-AUTH-006](../test-cases/006_login_incorrect_password.md)** |
