###############################################################
DAY 3 - 2022-04-02
###############################################################

---

PODSTAWY BE

---

Klient <-> serwer gada ze soba po HTTP

---

HTTP Statuses

udalo sie znalezsc - 2xx
200 - ok

nie udalo sie znalezc - 4xx
401 - Unauthorized
404 - Not found

Zasob jest gdzie indziej - 3xx
301 - moved perm
302 - moved temp

blad dyskowy/serwerowy - 5xx
500 - blad serwera

---

HTTP Methods

GET - odczytywanie
POST - tworzenie
PUT - edycja
DELETE - usuniecie

---

HTTP headers
Headers wystepuja po stronie klienta i po stronie serwera

Authorization
ContentType - "application/json"
X-TENET-Y - ""

Serwerowe Headery

SET-COOKIE (HTTP Cookie)

Request Body

GET - Params (queryparams) // localhost:3003?id=5
POST - Dodanie (Body)
PUT - Edycja (Body)
DELETE - Usuniecie - Params (queryparams)

---

Rest API

localhost:3003/cars

localhost:3003/cars - GET - pobranie wszsytkiech samochodow
localhost:3003/cars/1 - GET - pobranie samochodu o ID 1
localhost:3003/cars - POST - dodanie samochodu
localhost:3003/cars/1 - PUT - edycja samochodu
localhost:3003/cars/1 - DELETE - usuniecie samochodu
