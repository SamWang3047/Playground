# Day 7 - Docker 部署到云服务器

## 1. 服务器准备

以 Ubuntu 22.04 为例：

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo $VERSION_CODENAME) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin nginx certbot python3-certbot-nginx
```

## 2. 上传代码

```bash
git clone <your_repo_url> weekly-report
cd weekly-report
```

## 3. 配置环境变量

在项目根目录创建 `.env`：

```env
POSTGRES_PASSWORD=304714
```

## 4. 启动容器

```bash
docker compose up -d --build
```

检查状态：

```bash
docker compose ps
docker compose logs -f app
```

## 5. 配置 Nginx 反向代理

```bash
sudo cp deploy/nginx/weekly-report.conf /etc/nginx/sites-available/weekly-report
sudo ln -s /etc/nginx/sites-available/weekly-report /etc/nginx/sites-enabled/weekly-report
sudo nginx -t
sudo systemctl reload nginx
```

将 `server_name your-domain.com;` 改成你的域名，并确保 DNS A 记录指向服务器公网 IP。

## 6. 配置 HTTPS

```bash
sudo certbot --nginx -d your-domain.com
```

## 7. 回归检查

1. 打开 `https://your-domain.com/login`
2. 登录/注册
3. 新建周报
4. 查看历史列表
5. 退出登录

## 8. 常用运维命令

```bash
# 更新并重启
git pull
docker compose up -d --build

# 停止
docker compose down

# 停止并删除数据卷（危险）
docker compose down -v
```
