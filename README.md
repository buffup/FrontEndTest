# Buff UP LTD React Dev. Test

# The Task:

Display our `Buff` component as an overlay of the video HTML element.

Using the API link provided, you should replace the information contained in the provided `Buff` component with real data.

Build a `TimeInput` component that outputs the following format `mm:ss`. Add a form to `App.js` using the new `TimeInput` component and a submit button. The output of this form should define the countdown for our `Buff`. The minimum time allowed to answer should be 5 seconds `00:05` and the maximum is 2 minutes `02:00`

### UI

The Buff component and the video component should look like this:

![Buff](Buff.png)

The Time input component should look like this

![TimeInput](TimeInput.png)

- [ ] The countdown timer should work and at the end if the user hasn't yet voted, the question should automatically hide

- [ ] We should be able to select different times according to the restrictions and that should reflect on the countdown timer.

- [ ] When the user selects an answer, the correct answer should be highlighted letting the user know if they got it right (UI of your choice)

## What we are looking for:

- Demonstration of coding style and design patterns.
- Error handling.
- Any form of unit testing you see fit.
- Use the design provided as a guidance, we are not expecting a pixel perfect solution.

## API Usage

This is a brief summary of the api endpoints you will need in order to create the library. Reaching the endpoint shown below you should be able to get a json response with all the information needed for this task. Feel free to add any extra information in the UI you see relevant.

#### Base URL

The base URL is `http://demo2373134.mockable.io/`

#### Get Buff

Gets the data to show the Buff

```
GET /buff/:buffId
Buff Id is the id of the buff to fetch
Id's from 1 to 5 are available
```

Sample response:

```
{
    "data": {
        "id": 1895,
        "stream_id": 18,
        "client_id": 6,
        "user_id": 16,
        "name": "placeholder",
        "question": "Who would you rather have as your Warzone partner?",
        "participation_points": 9,
        "type": 3,
        "status": 3,
        "statusText": "expired",
        "language": "en",
        "public": false,
        "priority": 1,
        "replay": true,
        "delay": 0,
        "duration": 15,
        "play_at": null,
        "resolve_at": null,
        "resolved_at": null,
        "published_at": "2020-09-28T19:21:06Z",
        "expire_at": 2892939,
        "expires_at": "2020-09-28T19:21:32Z",
        "author": {
            "id": 12,
            "first_name": "DreamHack",
            "last_name": "Games",
            "photo": [
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/1x.png",
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/2x.png",
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/3x.png",
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/original.png"
            ]
        },
        "answers": [
            {
                "id": 5325,
                "buff_id": 1895,
                "title": "Nick",
                "image": [
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/1x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/2x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/3x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/original.png"
                ],
                "bg_color": "#000000",
                "fg_color": "#ffffff"
            },
            {
                "id": 5324,
                "buff_id": 1895,
                "title": "Vikk",
                "image": [
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/1x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/2x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/3x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/original.png"
                ],
                "bg_color": "#000000",
                "fg_color": "#ffffff"
            }
        ]
    }
}
```

## How to Submit your solution:

- Clone this repository
- Create a repo in github, bitbucket or a suitable alternative and provide a link to the repository.
- Provide a readme in markdown which details of your code and any libraries that you may have used (feel free to use any libraries you see fit)
- Explain how we should test the solution

Good luck!
