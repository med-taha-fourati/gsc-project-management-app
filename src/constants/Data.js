export const Site = {
    url: "https://www.google.com",
    permission: "",
    last_analysis: ""
}

export const Project = {
    id: 0,
    name: "",
    description: "",
    site: Site,
    created_at: "",
    updated_at: "",
    closed: false,
}

export const Query = {
    query: 0,
    clicks: 0,
    impressions: 0,
    ctr: 0,
    position: 0,
    opportunity: ""
}

export const SiteResult = {
    success: true,
    site_url: "",
    analysis_date: "",
    period_days: 3,
    data_source: "Google Search Console API",
    summary: {
        total_clicks: 0,
        total_impressions: 0,
        avg_ctr: 0,
        avg_position: 0
    },
    top_queries: [],
    recommendations: []
}

export const Recommendation = {
    priority: "",
    type: "",
    description: ""
}