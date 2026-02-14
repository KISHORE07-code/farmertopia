import { Field, Insight, MarketPrice, Task, Weather, YieldData } from "./types";
import { FIELDS, INSIGHTS, MARKET_PRICES, TASKS, USER, WEATHER, YIELD_HISTORY } from "./mockData";

// Simulate async fetching
export async function getUser() {
  return USER;
}

export async function getFields(): Promise<Field[]> {
  return FIELDS;
}

export async function getTasks(): Promise<Task[]> {
  return TASKS;
}

export async function getWeather(): Promise<Weather> {
  return WEATHER;
}

export async function getMarketPrices(): Promise<MarketPrice[]> {
  return MARKET_PRICES;
}

export async function getYieldHistory(): Promise<YieldData[]> {
  return YIELD_HISTORY;
}

export async function getInsights(): Promise<Insight[]> {
  return INSIGHTS;
}
