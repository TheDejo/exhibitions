
export type Pagination = {
    total:        number;
    limit:        number;
    offset:       number;
    total_pages:  number;
    current_page: number;
    next_url:     string;
}

export type PaginationPayload = {
    page: number;
    pageLimit: number;
};

export type Exhibition = {
    id:                       number;
    api_model:                string;
    api_link:                 string;
    title:                    string;
    is_featured:              boolean;
    description:              string;
    short_description:        string;
    web_url:                  string;
    image_url:                string;
    type:                     string;
    status:                   string;
    aic_start_at:             Date;
    aic_end_at:               Date;
    date_display:             null;
    department_display:       string;
    gallery_id:               number;
    gallery_title:            null;
    artwork_ids:              any[];
    artwork_titles:           any[];
    artist_ids:               any[];
    site_ids:                 any[];
    image_id:                 null;
    alt_image_ids:            any[];
    document_ids:             any[];
    suggest_autocomplete_all: {
        input:    string[];
        contexts: {
            groupings: string[];
        };
    };
    last_updated_source:      Date;
    last_updated:             Date;
    timestamp:                Date;
}

export type SingleExhibition = {
        id:                           number;
        api_model:                    string;
        api_link:                     string;
        title:                        string;
        is_featured:                  boolean;
        description:                  string;
        short_description:            string;
        web_url:                      string;
        image_url:                    string;
        type:                         string;
        status:                       string;
        aic_start_at:                 Date;
        aic_end_at:                   Date;
        date_display:                 null;
        department_display:           null;
        gallery_id:                   number;
        gallery_title:                null;
        artwork_ids:                  any[];
        artwork_titles:               any[];
        artist_ids:                   any[];
        site_ids:                     any[];
        image_id:                     null;
        alt_image_ids:                any[];
        document_ids:                 any[];
        suggest_autocomplete_boosted: string;
        suggest_autocomplete_all:     {
            input:    string[];
            contexts: {
                groupings: string[];
            };
        };
        last_updated_source:          Date;
        last_updated:                 Date;
        timestamp:                    Date;
}