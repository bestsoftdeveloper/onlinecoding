https://jorin.me/deploy-with-travis-and-git/

eval "$(ssh-agent -s)" # Start the ssh agent
echo "$DEPLOY_KEY" > deploy_key.pem
chmod 600 deploy_key.pem # This key should have push access
ssh-add deploy_key.pem
git remote add deploy $REPO_URI
git push deploy master
