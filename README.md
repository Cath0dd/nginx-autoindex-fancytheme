# nginx-autoindex-fancytheme
A responsive theme for Nginx Fancyindex module. Minimal, modern and simple. Comes with a search form, aims to handle thousands of files without any problems.

[FancyIndex](https://github.com/aperezdc/ngx-fancyindex)

[![made-for-nginx](https://img.shields.io/badge/Made%20for-nginx-1f425f.svg)](https://www.nginx.org/)

## Setup
```bash
$ git clone git@github.com/Cath0dd/nginx-autoindex-fancytheme.git
$ mv nginx-autoindex-fancytheme/.indexer /you-site-dir/.indexer

$ sudo nano /etc/nginx/sites-available/you-server-name

# example config for nginx see in example.conf

$ sudo ln -s /etc/nginx/sites-available/you-server-name /etc/nginx/sites-enabled/you-server-name
```
## Screenshots
![index](https://github.com/Cath0dd/nginx-autoindex-fancytheme/blob/main/screenshot/index-act.png?raw=true)
<details>
  <summary>More screenshots</summary>
  
  ![index](https://github.com/Cath0dd/nginx-autoindex-fancytheme/blob/main/screenshot/index.png?raw=true)
  
  ![404](https://github.com/Cath0dd/nginx-autoindex-fancytheme/blob/main/screenshot/404.png?raw=true)
  
  ![403](https://github.com/Cath0dd/nginx-autoindex-fancytheme/blob/main/screenshot/403.png?raw=true)
</details>

## License

[![GitHub license](https://img.shields.io/badge/license-MIT-green)](https://github.com/Cath0dd/nginx-autoindex-fancytheme/blob/main/LICENSE)
