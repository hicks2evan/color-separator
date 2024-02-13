# color-separator
API to create n color separations for posted images. Useful for generating separation files for Risograph printing and screen printing.

### [API URL](https://color-separator-api-67f36f39cb8f.herokuapp.com/)

# Local example:
```
curl --location 'http://localhost:3001/separate' \
--form 'image=@"[YOUR PNG PATH]"' \
--form 'colors="[\"#FFFFFF\",\"#000000\"]"'

[
    "separationacIfdr.png",
    "separationSsooWy.png"
]
```

```
curl --location 'http://localhost:3001/file/separationiLnWMm.png' \
--header 'Accept: image/png' --output response.png

-- response.png
```

![example](https://github.com/hicks2evan/color-separator/assets/23247607/0ec0a1b7-fbd2-43b5-ac87-a1f3b9cd64f6)
![example gif](https://github.com/hicks2evan/color-separator/assets/23247607/8ec4dae5-485f-40a7-ab25-4209900e5388)
