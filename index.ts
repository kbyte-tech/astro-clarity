import type {AstroIntegration} from "astro";

type ClarityOptions = {
  enabled: boolean;
  projectId: string;
}

export default function clarityIntegration(options: ClarityOptions): AstroIntegration {
  return {
    name: 'clarity',
    hooks: {
      'astro:config:setup': ({injectScript}) => {
        if ((options?.enabled ?? true) && options?.projectId) {
          injectScript('head-inline', `function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "${options.projectId}");`);
        }
      }
    }
  }
}