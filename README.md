## Running the app

First, install all dependencies:

```bash
npm i
```

and then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features covered in this app

- [x] integration with Punk API
- [x] an overview of beer bottles in a form of a grid and list
- [x] a search bar to filter the beers by name
- [x] example filters brewedBefore and brewedAfter
- [x] sorting by name and brewed year
- [x] a beer details page
- [x] adding a new beer form with validation and saving to local storage
- [x] a beer details page
- [x] handling not found beer

## Things worth improving

- [] pagination (see explanation below)
- [] better error handling for API calls
- [] local storage for the beer list is not ideal when using external API, it's worth unifying that to have a single source of truth for a single type of resource
- [] loading states for the beer list and beer details (I skipped that for the sake of time)
- [] icons instead of unicode characters (I used unicode characters for the sake of time)

## App overview

I decided to follow the standard Next.js convention having in mind that the scope of this app is pretty small.

Because there are no modules and services except for external API and beer list itself, I decided to keep fetching data inside useEffect hook at the highest level components (both for list and detail view).

If the app were intended to grow I would probably move that to a separate service and create a separate container component for fetching, or use SWR and create a custom hook to handle data (depending on the context).

I also decided to skip prefetching data for a detail view, because there were no requirements regarding future data modification, which would impact the decision whether prefetching is a good idea or not.

I used local storage to store the beer list that user wants to add, because I wanted to avoid creating a separate backend service for that, but in a real world app I would probably use a database to store the data. Ideally it would be part of Punk API or something similar.

Unfortunately, combining local storage with external API is not ideal, because it's hard to keep the data in sync. I decided to keep it simple and just add the beer to the list, but in a real world app that would introduce a bunch of problems because of having to maintain two sources of truth for the same resource. If, for some reason, this would be a requirement, I'd suggest creating some kind of facade to unify the data and then use proxy to handle the requests.

## Pagination issues

Punk API technically supports pagination, but it's not very useful, because it's missing the common properties needed to handle edge cases, such as total number of items, current page, number of items per page, etc. It's also not possible to fetch the next page of results without knowing the current page, because the API doesn't support that. I decided to skip pagination for these reasons, but if it was a requirement, I would probably suggest creating a cursor-based pagination having in mind large dataset that the collection of beer bottles can be. I would also suggest using SWR to handle the data, because it has built-in support for pagination and it's pretty easy to use.
