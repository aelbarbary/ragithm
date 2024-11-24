cd /Users/abdel/Documents/ragithm
npm run build
cd dist
aws s3 sync . s3://ragithm
aws cloudfront create-invalidation --distribution-id  E1THD51BM99XCS --paths "/**/*" "/*"