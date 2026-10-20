(function () {
  'use strict';
  const charts = [
    ['vis1', 'map1_australia.vg.json'],
    ['vis2', 'map2_slnsw_localities.vg.json'],
    ['vis4', 'map4_slnsw_hexbin.vg.json'],
    ['vis8', 'chart8_nma_top_places.vg.json'],
    ['vis5', 'chart5_slnsw_treemap.vg.json'],
    ['vis6', 'chart6_slnsw_format_colour.vg.json'],
    ['vis12', 'chart12_collection_colour_comparison.vg.json'],
    ['vis3', 'map3_akon_world.vg.json'],
    ['vis7', 'chart7_akon_country_bump.vg.json'],
    ['vis10', 'chart10_akon_year_area.vg.json'],
    ['vis9', 'chart9_akon_feature_upset.vg.json']
  ];

  async function loadChart(id, filename) {
    const target = document.getElementById(id);
    target.setAttribute('aria-busy', 'true');
    try {
      if (typeof vegaEmbed !== 'function') {
        throw new Error('The chart library could not be downloaded.');
      }
      // Keep document-relative data URLs and the original Vega action menus.
      await vegaEmbed('#' + id, 'json/' + filename);
      target.dataset.chartState = 'loaded';
    } catch (error) {
      target.dataset.chartState = 'error';
      const message = document.createElement('p');
      message.className = 'chart-status';
      message.setAttribute('role', 'alert');
      message.append('This chart could not load. Check your connection and reload. ');
      const source = document.createElement('a');
      source.href = 'json/' + filename;
      source.textContent = 'Open the chart specification';
      message.append(source);
      target.replaceChildren(message);
      console.error('Chart loading failed:', filename, error);
    } finally {
      target.setAttribute('aria-busy', 'false');
    }
  }

  // Await webfonts before drawing canvas text, avoiding a permanent fallback font.
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  fontsReady.then(() => Promise.all(charts.map(([id, file]) => loadChart(id, file))));
})();
