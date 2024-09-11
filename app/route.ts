import { NextRequest } from 'next/server'
import { htmlResponse } from '@/app/_utils/response'
import { homeHtml } from '@/app/_utils/frame-html'
import { getFrameHost } from '@/app/_utils/host'

export const dynamic = 'force-dynamic' // static by default, unless reading the request

export async function GET(request: NextRequest) {
    const host = getFrameHost(request)
    return htmlResponse(homeHtml(host))
}

export async function POST(request: NextRequest) {
    const host = getFrameHost(request)
    return htmlResponse(homeHtml(host))
}
