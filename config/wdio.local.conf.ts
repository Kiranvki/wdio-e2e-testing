import {config as baseConfig} from '../wdio.conf.ts'

export const config=Object.assign(baseConfig,{
    environment:"LOCAL",
    jiraURL:"https://visteon-sandbox.atlassian.net"
})