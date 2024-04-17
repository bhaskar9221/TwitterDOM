from ntscraper import Nitter
import pandas as pd
scraper = Nitter()
username = "elonmusk"
number_of_tweets = 5
tweets = scraper.get_tweets(username,mode="user",number=number_of_tweets)
tweets_list = []
for tweet in tweets["tweets"] :
  tweets_list.append( {"tweet" : tweet['text']})
df = pd.DataFrame(tweets_list)
df.head()


#please run it in a notebook rather than python file
