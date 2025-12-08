# TypeScript-এ interfaces এবং types এর মধ্যে কিছু পার্থক্য কী কী?

=> Interface: মূলত object-এর structure define করার জন্য।

=> Type: object, union, tuple, primitive সবই define করতে পারে।


=> Interface: Interface অন্য interface কে extend করতে পারে।

=> Type: type alias কে & দিয়ে combine করতে পারে।


=> Interface “reopen” করা যায়, অর্থাৎ একই নাম দিয়ে আরও property যোগ করা যায়।
Type এ এটা সম্ভব নয়।


=> অনেক ক্ষেত্রে Interface আর Type একই কাজ করে; তবে Interface object-focused, আর Type general এবং বেশি versatile.


=> বড় প্রজেক্টে Interface ভালো, কারণ এটা class এবং object structure-এর সাথে ভাল কাজ করে। ype union-এর ক্ষেত্রে বেশি flexible



# TypeScript-এ keyof কীওয়ার্ডের ব্যবহার কী? উদাহরণ সহ বোঝাও।

=> keyof ব্যবহার করা হয় কোনো object বা type-এর সব প্রপার্টির নামকে type হিসেবে পাওয়ার জন্য। মানে, এটা object-এর key গুলোকে type হিসেবে ধরতে সাহায্য করে।

                                          type User = {
                                              name: string;
                                              age: number;
                                              isActive: boolean;
                                          };
                                          
                                          type UserKeys = keyof User; 

                                          let key: UserKeys;
                                          key = "name";      
                                          key = "age";   

এখানে keyof দিয়ে User-এর সব key নিয়ে একটা type বানানো হলো এবং UserKeys এর মান হবে: "name" | "age" | "isActive"
key = "name"; =>  ঠিক আছে | key = "age";  =>  ঠিক আছে কিন্তু, key = "email";  // error, কারণ User-এর মধ্যে "email" নেই |
keyof User আমাদের দিল "name" | "age" | "isActive" type। এটা তখন কাজে লাগে যখন আমরা object-এর key গুলোকে strictly type হিসেবে ব্যবহার করতে চাই।
