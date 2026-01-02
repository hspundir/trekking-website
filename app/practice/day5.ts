function identity<T>(value: T): T {
  return value;
}

identity<string>("Trekking Blog");
identity<number>(5);
identity<boolean>(true);
