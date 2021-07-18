# ngx-pokemontcg-io

The ngx-pokemontcg-io package is an Angular Library that aims to allow an easy way of interacting with the API provided by [Pokemon TCG IO](https://docs.pokemontcg.io/).

# Getting Started

To start using the library, you will need to add the following dependency to your package.json 

    "ngx-pokemontcg-io": "1.0.0"

You will then need to import the module into your  *.module.ts file. An example of this may look like:

    @NgModule({
	    declarations: [
	    AppComponent,
	    TestComponent],
	    imports: [
	    BrowserModule,
	    AppRoutingModule,
	    HttpClientModule,
	    NgxPokemonTcgIoModule
	    ],
	    providers: [],
	    bootstrap: [AppComponent]
	})
	export class AppModule {}

The next step would be importing the service into the component or service where you would like to use it. This can be done like so:

    constructor(private  tcg: PokemontcgIoService) {}



It is recommended that you sign up for an API key with the Pokemon TCG IO API as you will be rate limited to 1000 calls a day compared to 20,000. If you do have an API key,  you are able to set it within the service like so:

    this.tcg.apiKey = 'example-key';


From here you should be use the following functions which reflect the endpoints outlined [here](https://docs.pokemontcg.io/).

    public getCard(cardId: string): Observable<Card>;
    public searchCard(filter: Filter) Observable<SearchResult<Card>>;
    public getSets(): Observable<Array<Set>>;
    public searchSet(filter: Filter): Observable<SearchResult<Set>>;
    public getTypes(): Observable<Array<string>>;
    public getSubTypes(): Observable<Array<string>>
    public getSuperTypes(): Observable<Array<string>>
    public getRarities(): Observable<Array<string>>
    
    
    
