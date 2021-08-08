import pybithumb

 
# all = pybithumb.get_current_price("ALL") 
# for k, v in all.items():
#     #print(k, v)
#     print(k, v['fluctate_rate_24H'])

tickers = pybithumb.get_tickers()

for ticker in tickers:
    df = pybithumb.get_ohlcv(ticker)
    print(df.head())