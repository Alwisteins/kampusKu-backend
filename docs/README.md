# Documentation

## Get Province

- Endpoint: `GET` `api/v1/province`

- Response Body Success:

```
{
    "status": true,
    "message": "provinsi ditemukan",
    "province": {}
}
```

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
    name="campus name"
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
    "id"=1 / 2 / etc.
```

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```

## Get Campus By Filter

- Endpoint: `GET` `api/v1/campus/filter`

- Request Query:

```
    (optional) province="Province Name"
    (optional) type="Akademi" / "Universitas" / "Politeknik" / "Institut"
    (optional) faculty="Faculty Name"
    (optional) accreditation="Akreditasi A" / "Akreditasi B" / etc.
```

`NOTE: add atleast one query params`

- Response Body Success:

```
{
    "status": true,
    "message": "kampus ditemukan",
    "kampus": {}
}
```
