echo 'Build...'
yarn build
echo 'Build complete!'
echo 'Init sync...'
aws s3 sync ./dist s3://temp-email.cafesao.net --region sa-east-1 --profile pessoal
echo 'Sync end!'
