# Nurtured Vine

Nurtured Vine is a Django-based web application designed to manage information and registrations for "The Light Camp" alongside other organizational features like a contact form, donations, and a gallery.

## Features

*   **The Light Camp Registration:** A complete registration system to capture participant and parent details, medical information, and consent for the Light Camp.
*   **Contact System:** A built-in contact form allowing users to send messages directly through the website, which are stored securely in the database.
*   **Informational Pages:** Includes About, Gallery, Donate, and details about The Light Camp.
*   **Django Admin Integration:** Easily manage registrations and contact messages via the Django admin interface.

## Tech Stack

*   **Backend:** Python, Django
*   **Database:** SQLite (default, can be configured for PostgreSQL/MySQL in production)
*   **Frontend:** HTML, CSS (Templates within the Django application)

## Getting Started

### Prerequisites

*   Python 3.8+
*   pip (Python package installer)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd "nurtured vine"
    ```

2.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    *   On Windows:
        ```bash
        venv\Scripts\activate
        ```
    *   On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4.  **Install dependencies:**
    *(Assuming there is a `requirements.txt`. If not, simply install Django)*
    ```bash
    pip install django
    ```

5.  **Run migrations:**
    ```bash
    python manage.py migrate
    ```

6.  **Create a superuser (optional, for admin access):**
    ```bash
    python manage.py createsuperuser
    ```

7.  **Run the development server:**
    ```bash
    python manage.py runserver
    ```

8.  **Access the application:**
    Open your web browser and navigate to `http://127.0.0.1:8000/`.

## Project Structure

*   `core/`: The main Django app containing models (`CampRegistration`, `ContactMessage`), views, and URLs for the project.
*   `nurturedVine/`: The Django project configuration folder (settings, main URLs).
*   `templates/`: HTML templates for the frontend.
*   `static/`: Static files (CSS, JavaScript, Images).
*   `manage.py`: Django's command-line utility for administrative tasks.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
