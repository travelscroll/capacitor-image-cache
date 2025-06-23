
  Pod::Spec.new do |s|
    s.name = 'TravelscrollCapacitorImageCache'
    s.version = '0.0.14'
    s.summary = 'Image cache'
    s.license = 'MIT'
    s.homepage = 'https://github.com/travelscroll/capacitor-image-cache'
    s.source = { :git => '', :tag => s.version.to_s }
    s.author = 'Richard McKern'
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '14.0'
    s.dependency 'Capacitor'
    s.dependency 'SDWebImage', '~> 4.0'
  end
