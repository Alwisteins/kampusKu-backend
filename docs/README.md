# Documentation

## Get All Campus

- Endpoint: `GET` `api/v1/campus/`

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Rank

- Endpoint: `GET` `api/v1/campus/rank`

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Name

- Endpoint: `GET` `api/v1/campus/search`

- Request Query:

```
    name= "campus name"
```

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Type

- Endpoint: `GET` `api/v1/campus/filter`

- Request Query:

```
    type= "Akademi" / "Universitas" / "Politeknik" / "Institut"
```

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Province

- Endpoint: `GET` `api/v1/campus/filter`

- Request Query:

```
    province= "Province Name"
```

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Faculty

- Endpoint: `GET` `api/v1/campus/filter`

- Request Query:

```
    faculty= "Faculty Name"
```

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Accreditation

- Endpoint: `GET` `api/v1/campus/filter`

- Request Query:

```
    accreditation= "Akreditasi A" / "Akreditasi B" / etc.
```

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Id

- Endpoint: `GET` `api/v1/campus/detail`

- Request query:

```
    "id": 1 / 2 / etc.
```

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```
