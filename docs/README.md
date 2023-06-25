# Documentation

## Get All Campus

- Endpoint: `GET` `api/v1/campus`

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

- Endpoint: `GET` `api/v1/campus/:name`

- Request Params:

```
    "name": "campus name"
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

- Endpoint: `GET` `api/v1/campus/filter/:type`

- Request Params:

```
    "type": "Akademi / Universitas / Politeknik / Institut"
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

- Endpoint: `GET` `api/v1/campus/filter/:province`

- Request Params:

```
    "province": "Province Name"
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

- Endpoint: `GET` `api/v1/campus/filter/:faculty`

- Request Params:

```
    "faculty": "Faculty Name"
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

- Endpoint: `GET` `api/v1/campus/filter/:accreditation`

- Request Params:

```
    "accreditation": "Accreditation A / Accreditation B / etc."
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

- Endpoint: `GET` `api/v1/campus/detail/:id`

- Request Params:

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
