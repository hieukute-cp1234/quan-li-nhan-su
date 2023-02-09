# DATN-Staff-Management

# Client

```sh
    cd /client
    npm install
    npm start
```

# Server

```sh
    cd /server
    composer install
    cp .env.example .env
    php artisan key:generate
    php artisan jwt:secret
    php artisan migrate
    php artisan db:seed
    php artisan serve
```

```sh
    php artisan storage:link chạy lệnh này để config path avatar
```

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=mail.test.datn@gmail.com
MAIL_PASSWORD=cwnprelwkwvnnbet
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=mail.test.datn@gmail.com
MAIL_FROM_NAME="DATN"
