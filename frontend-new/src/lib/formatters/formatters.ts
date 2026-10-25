export const formatTimeStamp = (timestamp: string): string =>
{
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hourCycle: 'h23'
    })
    .format(new Date(timestamp))
    .replace(/(\w{3}) (\d+)/, '$1. $2')
    .replace(' at ', ', ')
}