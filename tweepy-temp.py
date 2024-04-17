import tweepy

# Authenticate to Twitter
auth = tweepy.OAuth1API(consumer_key,consumer_secret,access_token,access_token_secret)

# Create API object
api = tweepy.API(auth)

# Get tweets from Elon Musk's timeline
tweets = api.user_timeline(screen_name='elonmusk', count=10)

# Print tweets
for tweet in tweets:
    print(tweet.text)
