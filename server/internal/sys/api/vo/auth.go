package vo

type OAuth2VO struct {
	ClientID         string `json:"clientID"`
	ClientSecret     string `json:"clientSecret"`
	AuthorizationURL string `json:"authorizationURL"`
	AccessTokenURL   string `json:"accessTokenURL"`
	ResourceURL      string `json:"resourceURL"`
	RedirectURL      string `json:"redirectURL"`
	UserIdentifier   string `json:"userIdentifier"`
	Scopes           string `json:"scopes"`
	AutoRegister     bool   `json:"autoRegister"`
}

type AuthVO struct {
	*OAuth2VO `json:"oauth2"`
}

type Auth2EnableVO struct {
	OAuth2 bool `json:"oauth2"`
}

type AuthStatusVO struct {
	Enable Auth2EnableVO `json:"enable"`
	Bind   Auth2EnableVO `json:"bind"`
}