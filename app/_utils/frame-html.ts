const frameImages = {
    home: '1.png',
}

export const homeHtml = (host: string) => `
    <!DOCTYPE>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${ host }/${ frameImages.home }" />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />
        <meta name="fc:frame:button:1" content="gif" />
        <meta name="fc:frame:button:1:action" content="link" />
        <meta name="fc:frame:button:1:target" content="https://frmz.lol/compgif?fc_composer=1" />
        <meta name="fc:frame:button:2" content="poll" />
        <meta name="fc:frame:button:2:action" content="link" />
        <meta name="fc:frame:button:2:target" content="https://frame.weponder.io/api/actions/create-poll?fc_composer=1" />
        <meta name="fc:frame:button:3" content="flappy" />
        <meta name="fc:frame:button:3:action" content="link" />
        <meta name="fc:frame:button:3:target" content="https://flappycaster.com/api/composer?fc_composer=1" />
        <meta name="fc:frame:button:4" content="farplanter" />
        <meta name="fc:frame:button:4:action" content="link" />
        <meta name="fc:frame:button:4:target" content="https://farplanter.xyz/color/play?fc_composer=1" />
      </head>

      <body>
        <figure>
          <img width="600" src="${ host }/${ frameImages.home }" />
        </figure>
      </body>
    </html>
  `
