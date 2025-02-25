<script>
    // CSS
    import normalize from './css/normalize.css';
    import postmedia from './css/postmedia.css';
    import colours from './css/colors.css';
    import fonts from './css/fonts.css';
    import css from './css/main.css';

    // VARS
    let currentStep, iframe;
    
    // COMPONENTS
    import Steps from '$components/Steps.svelte';

    // SET CHART HEIGH & URL HERE...
    const chartHeight = '575px';
    const flourishStoryUrl = 'https://flo.uri.sh/story/975711/embed';

    // FUNCTIONS
    const updateStep = function(currentStep) {
        iframe = document.querySelector('#app .chart > iframe');
        iframe.src = iframe.src.replace(/#slide-.*/, '') + '#slide-' + currentStep;
    }
    
    // conditional block to trigger step change on scroll
    $: {
        if (currentStep === 0) {
           updateStep(currentStep);
        } else if (currentStep === 1) {
            updateStep(currentStep);
        } else if (currentStep === 2) {
            updateStep(currentStep );
        } else if (currentStep === 3) {
            updateStep(currentStep);
        }
    };
</script>

<!-- MARKUP -->
<section class="scrollyteller sticky">
    <header>
        <h1>HED</h1>
        <p class="subhead">TK TK TK</p>
    </header>
    <div class="chart sticky">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src={flourishStoryUrl} frameborder='0' scrolling='no' style="width:100%;height:{chartHeight};" title="flourish-embed"></iframe>
        <!-- NOTE: add `class="no-pointer"` to iframe if touch scrolling doesn't work -->
    </div>

    <!-- flourish logo -->
    <div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/3706064/?utm_source=embed&utm_campaign=visualisation/3706064' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
</section>

<ul class="steps">
    <Steps bind:currentStep={currentStep}/>
</ul>

<footer>
    <p class="source">Source:
        <a href="https://www.vancouversun.com/" target="_blank">tk</a>,
        <a href="https://www.openstreetmap.org/" target="_blank">tk</a>
    </p>
    <!-- flourish logo -->
    <div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/3706064/?utm_source=embed&utm_campaign=visualisation/3706064' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
</footer>

<!-- CSS -->
<style>
    /* STEPS */
    section {
        position: relative;
    }
    .sticky { 
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        position: sticky;
        top: 5vh;
        z-index: 1;
    }
    .chart .no-pointer {
        pointer-events: none;
    }
    .steps {
        margin-top: -100%;
        position: relative;
        z-index: 2;
    }
</style>