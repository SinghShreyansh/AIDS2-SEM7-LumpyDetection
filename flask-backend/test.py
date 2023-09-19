import tweepy
from flask import Flask, jsonify, request

# create Flask app
app = Flask(__name__)

# define function to retrieve home timeline for given user
def get_home_timeline(username):
    # authenticate with Twitter API
    consumer_key = "c3sFnv7hxrfgRk5zN4VT1tfpk"
    consumer_secret = "Tmr7cq2PLOUEA8nP2zrW5w5OT2yKieu5HE4FuOniyEZfin9Ktv"
    access_token = "1390587786491617282-5K8Sz2lHtG35RP1UzjHnkl1LvvkYyw"
    access_secret = "4CGdhXjBIlELdJqlm0vXdyQoDtslmVaNmgMebqSSs1ADf"

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_secret)
    api = tweepy.API(auth)

    # retrieve home timeline
    tweets = api.user_timeline(screen_name=username)

    # iterate over each tweet and add a button
    for tweet in tweets:
        # create a button element
        button = f'<button id="button-{tweet.id}" class="tweet-button">Call API</button>'

        # append the button to the tweet text
        tweet_text = f'{tweet.text} {button}'

        # update the tweet with the new text
        api.update_status(tweet_text, tweet.id)

    # return the updated home timeline
    updated_tweets = api.user_timeline(screen_name=username)
    return [tweet._json for tweet in updated_tweets]

# define API endpoint to retrieve home timeline for given user and add buttons to each tweet
@app.route('/home_timeline')
def home_timeline():
    # retrieve username from request parameters
    username = request.args.get('username')

    # get home timeline for given user
    tweets = get_home_timeline(username)

    # return home timeline as JSON
    return jsonify(tweets)

# define function to handle button clicks
def handle_button_click(tweet_id):
    # make API call here
    print(f'API called for tweet {tweet_id}')

# add event listener for button clicks
@app.route('/handle_button_click')
def handle_button():
    # retrieve tweet ID from request parameters
    tweet_id = request.args.get('tweet_id')

    # make API call for given tweet ID
    handle_button_click(tweet_id)

    # return success response
    return 'API called successfully'

# run the Flask app
if __name__ == '__main__':
    app.run()
