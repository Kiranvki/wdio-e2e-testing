## Insall package and run test automation

- Clone the repo https://git.visteon.com/sw_tools_automation/pfa-jira-e2e-test
- npm install
- Search email dchoukse@visteon.com and change to your <emailId> for SSO login to Jira
- npm run wdio

## Create project from scratch.

# Install wdio

- npm init wdio .

# package.json

- Check'type': 'module'

# tsconfig.json

- Check "module": "ESNext"
- Check "resolveJsonModule": true"
- Add "esModuleInterop": true,"
- Change `"strict": false

# wdio.conf.ts

- Check project: "./tsconfig.json`
- Add ${process.cwd()}/test/features/\*_/_.feature`
- Add `./test/features/step-definitions/*.ts`
