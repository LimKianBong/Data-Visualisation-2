# Data notes and summary-file index

These notes describe the supplied project snapshot, audited on 22 October 2026. The original ZIP contained processed summary datasets and map geometry, but no raw institutional exports, acquisition dates or preprocessing scripts. Totals below are verified within those summaries; they do not independently validate collection extraction, name matching, colour harmonisation or geocoding. Preserve the original exports and processing notebooks if you have them elsewhere.

One catalogue record is not necessarily one physical postcard. Do not sum or directly equate the different geographic, colour and relationship denominators. Filters change what is displayed; tooltip labels state the underlying counting units. All supplied numeric datasets are unchanged in this revision.

The three Australian maps use an Australian-centred conic equal-area projection (standard parallels 18°S and 36°S; the NSW detail uses 30°S and 36°S). This preserves relative geographic area in the display; it does not establish how the supplied hexagons were originally constructed. The world map uses Equal Earth.

## Files and interpretation

### australia_state_comparison.csv

State-assigned NMA depicted-record counts sum to 2,101 (a record may appear in more than one state); mapped SLNSW records sum to 1,195. NSW shares are 1,425 / 2,101 = 67.8% and 1,036 / 1,195 = 86.7%. These are separate denominators.

### slnsw_nsw_localities.csv

244 geocoded NSW localities sum to 1,036 catalogue records. Coordinates refer to assigned locality names, not precise photographic sites. Circle area is proportional to catalogue_records.

### slnsw_hexbin_50km.topojson

145 occupied cells aggregate 1,195 SLNSW mapped records across Australia. Maximum cell count is 149. The supplied file is described as 50-km bins; the generating CRS and bin-construction script were not supplied. The displayed projection is conic equal-area with Australian parallels.

### nma_top_depicted_places.csv

20 ranked NMA depicted places. Sydney 138, Mount Gambier 85, Adelaide 63. Place categories are not mutually exclusive; Sydney and Sydney Harbour may overlap.

### slnsw_format_summary.csv

1,559 catalogue records. The treemap displays 1,524 classified records, excluding 35 records in Other/Unknown scope or format categories. Area is rescaled to the displayed subset after filtering; tooltip shares retain the full 1,559-record denominator.

### slnsw_format_colour.csv

55 supplied format/style combinations; missing combinations are explicitly shown as zero. Each heatmap row uses the sum of records within that format. Counts across all rows sum to 1,559. Format filtering does not change each row denominator.

### collection_colour_comparison.csv

Three independent collections: NMA 3,805, SLNSW 1,559, AKON 34,846. Four harmonised visual-style classes. Colour proportions are 20.2%, 40.3%, 22.0%. These labels describe metadata, not verified printing technologies.

### nma_slnsw_shared_places.csv

98 distinct normalised NSW names, not 98 verified equivalent geographic sites. Shares use 1,425 NMA distinct NSW depicted records and 1,036 SLNSW mapped NSW records. gap_pp is the absolute percentage-point difference. The chart selects the 15 largest gaps; it does not show all 98.

### combined_mapped_places.csv

6,032 rows: 244 SLNSW NSW localities (1,036 records) and 5,788 AKON places (34,635 place-record counts). The AKON mapped sum differs from its full 34,846-record colour/tag denominator. One symbol represents a place. Counts and geographical coverage are not harmonised across archives.

### nma_state_role_flows.csv

39 unique state-role links totalling 3,598 relationship entries. Each link has 41 x/lower/upper geometry samples (1,599 CSV rows). count is repeated at every sample: never sum count over all rows. Group by link_id and take one count per link. Lower/upper values are normalised layout coordinates, not latitude/longitude.

### nma_state_role_nodes.csv

13 nodes (7 state groups, 6 role groups). State totals and role totals each sum to 3,598. NSW 2,655; Depicted 2,271. NSW to Depicted is 1,570 (43.6% of all entries). Other groups are inherited from the supplied extract; their exact membership cannot be recovered without the original pipeline.

### akon_feature_combinations.csv

8 mutually exclusive combinations of Building, Mountain, Water tags sum to all 34,846 records. None: 19,130 (54.9%); at least one: 15,716. The tagged-only control removes None; tooltips still use the full-collection denominator. False means tag absent in metadata, not verified absence in the image.

### australia_states.topojson

Australian administrative boundary geometry; object name australia_states, joined by STATE_NAME. The source ZIP also contains the GeoJSON version, retained in archive/docs/data for provenance.

### world_countries.topojson

Natural Earth world context; object ne_110m_admin_0_countries. Equal Earth projection for the world overview; Australia/Europe controls change centre and zoom. No historical boundary claims.
